import { useInView } from 'react-intersection-observer';

// Reusable ScrollAnimate component
const ScrollAnimate = ({ animation, children }) => {
  // Intersection Observer to detect when the element is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // allow it to trigger every time it comes into view
    threshold: 0.3,      // 30% of the element should be visible
  });

  return (
    <div
      ref={ref}
      className={`${
        inView ? animation : 'opacity-0'
      } transition-all duration-700 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimate;
