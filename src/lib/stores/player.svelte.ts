class PlayerStore {
  visible = $state(false);

  toggle() {
    this.visible = !this.visible;
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }
}

export const player = new PlayerStore();
