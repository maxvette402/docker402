export const getBitcoinBlockCount = async () => {

    const url = 'https://blockchain.info/q/getblockcount';
    const options = {
        method: 'GET'
    };
    console.log(`Fetch url: ${url}`);
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(`Result: ${result}`);
    return result;
};