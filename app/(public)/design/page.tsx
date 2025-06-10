'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';

export default function DesignPage() {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
    const [zoom, setZoom] = useState(1.5); // početni zoom

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result as string);
                setPosition({ x: 0, y: 0 });
                setZoom(1.5);
            };
            reader.readAsDataURL(file);
        }
        console.log(size);
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

    // Touch Events
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
        <div className="max-w-4xl mx-auto p-6 flex flex-col gap-4 select-none">
            <h1 className="text-3xl md:text-5xl font-bold text-left">
                Dizajniraj svoj bedž
            </h1>

            <div className="flex flex-col gap-2">
                <Label>Izaberi veličinu bedža</Label>
                <RadioGroup defaultValue="medium" onValueChange={(v) => setSize(v as 'small' | 'medium' | 'large')}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="small" id="r1" />
                        <Label htmlFor="r1">Mali</Label>
                        <RadioGroupItem value="medium" id="r2" />
                        <Label htmlFor="r2">Srednji</Label>
                        <RadioGroupItem value="large" id="r3" />
                        <Label htmlFor="r3">Veliki</Label>
                    </div>
                </RadioGroup>
            </div>

            <div className="flex flex-col gap-2">
                <Label>Otpremi svoju sliku</Label>

                <label
                    htmlFor="image"
                    className="border border-dashed border-gray-400 hover:border-gray-600 rounded-lg px-4 py-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-gray-50 hover:bg-gray-100"
                >
                    {imageSrc ? (
                        <>
                            <p className="text-sm text-gray-700 font-medium">Slika otpremljena ✅</p>
                            <p className="text-xs text-gray-500 mt-1">Možete je zameniti</p>
                        </>
                    ) : (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-gray-500 mb-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0-9l-3 3m3-3l3 3M12 3v9" />
                            </svg>
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

            {/* Izbor veličine */}


            {/* Zumiranje */}
            <div className="flex flex-col gap-2">
                <Label htmlFor="zoom">Zumiranje slike</Label>
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

            {/* Pregled slike uvek srednje veličine, bez obzira na izbor */}
            <div>
                <Label>Pregled</Label>
                <Card className="mt-2 w-fit">
                    <CardContent className="p-4 flex justify-center items-center">
                        <div
                            className={`overflow-hidden rounded-full bg-gray-200 w-36 h-36 relative touch-none`}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            style={{ cursor: dragging ? 'grabbing' : 'grab' }}
                        >
                            {imageSrc ? (
                                <div
                                    className="absolute top-0 left-0 w-full h-full"
                                    style={{
                                        transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
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


            {/* Dodaj u korpu */}
            <Button disabled={!imageSrc}>Dodaj u korpu</Button>
        </div>
    );
}
