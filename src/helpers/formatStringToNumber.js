export const formatStringToNumber = (value) => {
    return Number(String(value).replace(/\D/g, ''));
}