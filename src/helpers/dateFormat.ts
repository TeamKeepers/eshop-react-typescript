// From the date as input (STR), return an easily readable date string as output
export const formatDate = (date: string) : string => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
}