

const CLOUD_NAME = 'druvfoz4x';
const UPLOAD_PRESET = 'deteiling_pro_mobile';

export const uploadImageToCloudinary = async (
    uri: string,
): Promise<string> => {



    const response = await fetch(uri);

    const blob = await response.blob();

    const formData = new FormData();

    formData.append('file', blob, `order-${Date.now()}.jpg`);

    formData.append(
        'upload_preset',
        UPLOAD_PRESET,
    );

    const uploadResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
            method: 'POST',
            body: formData,
        },
    );

    const data = await uploadResponse.json();

    if (!uploadResponse.ok) {
        throw new Error(
            data?.error?.message ||
            'Cloudinary upload failed',
        );
    }

    return data.secure_url;
};