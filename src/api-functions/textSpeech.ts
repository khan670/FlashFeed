const HUGGING_FACE_KEY = "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";
export async function textSpeech(data: { inputs: string }) {
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
  //   const result = await response.blob();
  //   return result;
  return response.blob();
}
