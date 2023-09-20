import { useEffect } from 'react';

function ScrollToTopOnReload() {
  useEffect(() => {
    // Scroll to the top when the component is mounted (page is reloaded)
    window.scrollTo(0, 0);
  }, []);

  return null; // This component doesn't render anything
}

export default ScrollToTopOnReload;