export const generateRandomId = () => {
    const randomId = Math.round(Math.random() * 1000000);
    return randomId;
};

export const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            resolve(reader.result);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            reject(new Error("No file provided"));
        }
    });
};