export const navbarImagesBanner = (imageBanner, figcaption, id) => {

  return {
    id: id,
    image: imageBanner,
    figcaption: figcaption,
  };
};

export const imgBanner = (...imageBanner) => {
    const imgBanners = [imageBanner];
    return imageBanner;
}
