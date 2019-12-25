import {serverAddress} from "$redux/API/server.config";

export const fetchItemData = async (itemName:string) => {
    const response = await fetch(`${serverAddress}/itemData/${itemName}`);
    const jsonResponse = await response.json();
    return jsonResponse;
};