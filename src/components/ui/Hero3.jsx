import React from 'react';

const Hero3 = () => {
  const styles = {
    container: {
      position: 'relative',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#002244',
      overflow: 'hidden',
      padding: '5vw',
      fontFamily: 'Segoe UI, sans-serif',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
    },
    content: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '600px',
    },
    heading: {
      fontSize: '4rem',
      fontWeight: 800,
      margin: 0,
    },
    subheading: {
      fontSize: '1.5rem',
      marginTop: '1rem',
    },
    yellowShape: {
      position: 'absolute',
      width: '260px',
      height: '260px',
      backgroundColor: '#FFC300',
      borderRadius: '40px',
      zIndex: 1,
      animation: 'float 6s ease-in-out infinite',
    },
    shape1: {
      top: '15%',
      right: '10%',
      animationDelay: '0s',
    },
    shape2: {
      bottom: '5%',
      right: '20%',
      animationDelay: '3s',
    },
    keyframes: `
      @keyframes float {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-30px) rotate(5deg);
        }
      }
    `,
  };

  return (
    <div style={styles.container}>
      {/* Inject keyframes directly */}
      <style>{styles.keyframes}</style>

      <div style={{ ...styles.yellowShape, ...styles.shape1 }}></div>
      <div style={{ ...styles.yellowShape, ...styles.shape2 }}></div>

      <div style={styles.content}>
        <h1 style={styles.heading}>BigByte World 🌍</h1>
        <p style={styles.subheading}>
          Delivering Quality Software Products and Premium IT Services Since 2013
        </p>
      </div>
    </div>
  );
};

export default Hero3;
