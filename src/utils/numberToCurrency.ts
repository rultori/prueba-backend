export const numberToCurrency = (num: number, currency: string) => {
    num = Number(num)
    return num.toLocaleString("es-PA", {
        style: "currency",
        currency
    });
}