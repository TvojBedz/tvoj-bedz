
export const returnPaginatedPages = (page: number, totalPages: number): (number | string)[] => {
    const visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(p => {
        return (
            p === 1 ||
            p === totalPages ||
            Math.abs(p - page) <= 1
        );
    });

    const paginatedPages = visiblePages.reduce<(number | string)[]>((acc, curr, i, arr) => {
        if (i > 0 && curr - (arr[i - 1] as number) > 1) {
            acc.push("...");
        }
        acc.push(curr);
        return acc;
    }, []);

    return paginatedPages
}

