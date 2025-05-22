import Shop from "@/components/Shop/Shop";

const ShopPage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
    const params = await searchParams;
    const page = parseInt(params.page as string) || 1;

    return (
        <Shop page={page} />
    )
}



export default ShopPage