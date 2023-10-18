const slowLoad = (module, duration) =>
  new Promise(resolve => {
    setTimeout(() => resolve(module), duration);
  });

export default slowLoad;
