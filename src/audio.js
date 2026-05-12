const sounds = {
  hover: new Audio('/sounds/hover.mp3'),
  click: new Audio('/sounds/click.mp3'),
  transition: new Audio('/sounds/transition.mp3')
};

// Configura volumes baixos para não assustar o usuário
sounds.hover.volume = 0.2;
sounds.click.volume = 0.4;
sounds.transition.volume = 0.3;

export const playSound = (name) => {
  const sound = sounds[name];
  if (sound) {
    sound.currentTime = 0; // Reinicia para permitir reprodução rápida seguida
    sound.play().catch(() => {
      /* Navegadores bloqueiam áudio sem interação prévia, ignoramos o erro */
    });
  }
};
