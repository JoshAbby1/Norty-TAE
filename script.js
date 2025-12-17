function buildPrompt({ idea, outfit, scene, camera, props }) {
  const cleanIdea = (idea || "").trim() || "a realistic lifestyle image";
  const cleanOutfit = (outfit || "").trim() || "branded outfit (no hair/face description)";
  const cleanScene = (scene || "").trim() || "real location with natural imperfections";
  const cleanCamera = (camera || "").trim() || "9:16 vertical, realistic lighting";
  const cleanProps = (props || "").trim() || "everyday props, lived-in details";

  return [
    `CORE IDEA:\n${cleanIdea}`,
    `\nOUTFIT:\n${cleanOutfit}`,
    `\nSCENE:\n${cleanScene}`,
    `\nCAMERA:\n${cleanCamera}`,
    `\nPROPS / DETAILS:\n${cleanProps}`,
    `\nREALISM NOTES:\nUnposed, candid energy, real textures, no over-smoothing.`,
    `\nAVOID:\ncartoon, CGI, waxy skin, warped hands, extra fingers, broken logos, unreadable text`
  ].join("\n");
}

document.addEventListener("DOMContentLoaded", () => {
  const idea = document.getElementById("idea");
  const outfit = document.getElementById("outfit");
  const scene = document.getElementById("scene");
  const camera = document.getElementById("camera");
  const props = document.getElementById("props");
  const output = document.getElementById("output");
  const btn = document.getElementById("generate");

  btn.addEventListener("click", () => {
    output.value = buildPrompt({
      idea: idea.value,
      outfit: outfit.value,
      scene: scene.value,
      camera: camera.value,
      props: props.value,
    });
  });
});