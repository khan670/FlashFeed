const HUGGING_FACE_KEY="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"
export async function textSpeech(data) {
    const response = await fetch(
        "https://router.huggingface.co/hf-inference/models/facebook/mms-tts-eng",
        {
            headers: {
                Authorization: `Bearer ${HUGGING_FACE_KEY}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
        const result = await response.blob();
    //     const audioUrl = URL.createObjectURL(blob);
    // const audio = new Audio(audioUrl);
    // audio.play();
    return result
    }