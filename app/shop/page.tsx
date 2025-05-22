import Shop from "@/components/Shop/Shop";

const ShopPage = async (props: { searchParams: Promise<URLSearchParams> }) => {
    const searchParams = await props.searchParams;
    const page = parseInt(searchParams.get('page') || "1");


    return (
        <Shop page={page} />
    )
}

export default ShopPage