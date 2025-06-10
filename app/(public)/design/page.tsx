'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from '@/components/ui/dialog';

export default function DesignPage() {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1.5);
    const [dragging, setDragging] = useState(false);
    const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
    const [editorOpen, setEditorOpen] = useState(false);
    const [confirmedPosition, setConfirmedPosition] = useState({ x: 0, y: 0 });
    const [confirmedZoom, setConfirmedZoom] = useState(1.5);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result as string);
                setPosition({ x: 0, y: 0 });
                setZoom(1.5);
                setConfirmedPosition({ x: 0, y: 0 });
                setConfirmedZoom(1.5);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setDragging(true);
        setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (dragging && startPos) {
            setPosition({ x: e.clientX - startPos.x, y: e.clientY - startPos.y });
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
        setStartPos(null);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        setDragging(true);
        setStartPos({ x: touch.clientX - position.x, y: touch.clientY - position.y });
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (dragging && startPos) {
            const touch = e.touches[0];
            setPosition({ x: touch.clientX - startPos.x, y: touch.clientY - startPos.y });
        }
    };

    const handleTouchEnd = () => {
        setDragging(false);
        setStartPos(null);
    };

    return (
        <div className="px-4 max-w-5xl py-4 flex flex-col text-gray-900 gap-6 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-left">Dizajniraj svoj bedž</h1>

            <div className="flex flex-col gap-2">
                <Label>Dodaj svoju sliku</Label>
                <label
                    htmlFor="image"
                    className="border border-dashed border-gray-400 hover:border-gray-600 rounded-lg px-2 py-3 flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-gray-50 hover:bg-gray-100"
                >
                    {imageSrc ? (
                        <>
                            <p className="text-sm text-gray-700 font-medium">Slika otpremljena ✅</p>
                            <p className="text-xs text-gray-500 mt-1">Možete je zameniti</p>
                        </>
                    ) : (
                        <>
                            <p className="text-sm text-gray-600">Klikni ili prevuci sliku ovde</p>
                            <p className="text-xs text-gray-400 mt-1">Podržani formati: JPG, PNG</p>
                        </>
                    )}
                </label>
                <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                />
            </div>

            {imageSrc && (
                <Button variant="outline" onClick={() => setEditorOpen(true)}>
                    Podesi poziciju i zumiranje
                </Button>
            )}

            <div className="flex flex-col gap-2 w-full items-center">
                <Label>
                    Pregled bedža
                </Label>
                <Card className="mt-2 w-fit">
                    <CardContent className="p-4 flex justify-center items-center">
                        <div className={`overflow-hidden rounded-full bg-gray-200 w-36 h-36 relative`}>
                            {imageSrc ? (
                                <div
                                    className="absolute top-0 left-0 w-full h-full"
                                    style={{
                                        transform: `translate(${confirmedPosition.x}px, ${confirmedPosition.y}px) scale(${confirmedZoom})`,
                                        transformOrigin: 'center center',
                                    }}
                                >
                                    <img
                                        src={imageSrc}
                                        alt="Pregled bedža"
                                        draggable={false}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-full bg-gray-300" />
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Button disabled={!imageSrc}>Dodaj u korpu</Button>

            <Dialog open={editorOpen} onOpenChange={setEditorOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>Uredi poziciju i zumiranje</DialogTitle>
                    </DialogHeader>

                    <div className="flex flex-col gap-4 items-center">
                        <div
                            className="w-36 h-36 bg-gray-200 rounded-full overflow-hidden relative touch-none"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            style={{ cursor: dragging ? 'grabbing' : 'grab' }}
                        >
                            {imageSrc && (
                                <div
                                    className="absolute top-0 left-0 w-full h-full"
                                    style={{
                                        transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                                        transformOrigin: 'center center',
                                    }}
                                >
                                    <img
                                        src={imageSrc}
                                        alt="Pregled"
                                        draggable={false}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="w-full">
                            <Label htmlFor="zoom">Zumiranje</Label>
                            <input
                                id="zoom"
                                type="range"
                                min="1"
                                max="2.5"
                                step="0.01"
                                value={zoom}
                                onChange={(e) => setZoom(parseFloat(e.target.value))}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <DialogFooter className="flex justify-between gap-2">
                        <Button variant="secondary" onClick={() => setEditorOpen(false)}>
                            Zatvori
                        </Button>
                        <Button
                            onClick={() => {
                                setConfirmedPosition(position);
                                setConfirmedZoom(zoom);
                                setEditorOpen(false);
                            }}
                        >
                            Sačuvaj
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}