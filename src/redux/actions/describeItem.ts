export const describeItem = (itemName: string) => {
    return {type: "DESCRIBE_ITEM", payload:{itemName}}
};