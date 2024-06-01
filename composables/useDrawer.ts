const drawer = ref(false);

export const useDrawer = () => {

  const toggleDrawer = () => {
    drawer.value = !drawer.value;
  };

  return { drawer, toggleDrawer };
}
