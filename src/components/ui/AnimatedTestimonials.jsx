  "use client";
  import { useEffect, useRef } from "react";
  import { FaQuoteLeft } from "react-icons/fa";

  export const AnimatedTestimonials = ({ testimonials }) => {
    const containerRef = useRef(null);
    const translateX = useRef(0);

    useEffect(() => {
      const container = containerRef.current;

      let animationFrame;

      const scroll = () => {
        translateX.current -= 0.5; // Speed of scroll

        if (container) {
          container.style.transform = `translateX(${translateX.current}px)`;

          // If fully scrolled, reset
          if (Math.abs(translateX.current) >= container.scrollWidth / 2) {
            translateX.current = 0;
          }
        }

        animationFrame = requestAnimationFrame(scroll);
      };

      animationFrame = requestAnimationFrame(scroll);

      return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
      <div
        style={{
          maxHeight: "100vh",
          paddingTop: "2rem",
          paddingBottom: "5rem",
          backgroundColor: "#f3f4f6",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          marginTop:"3rem",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            color: "#0a243a",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          What Our Clients Say
        </h2>

        {/* Scrolling wrapper */}
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            ref={containerRef}
            style={{
              display: "flex",
              gap: "1.5rem",
              whiteSpace: "nowrap",
              willChange: "transform",
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                style={{
                  flex: "0 0 auto",
                  width: "30rem",
                  background: "#fff",
                  borderRadius: "1.5rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  padding: "2rem",
                
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexWrap:"wrap",
                }}
              >
                <div 
                style={{
                  display:"flex",
                  flexWrap:"wrap",
                }}>
                  <div
                    style={{
                      color: "#ff9908",
                      fontSize: "2.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <FaQuoteLeft />
                  </div>
                  <p
                    style={{
                      color: "#4b5563",
                      fontSize: "1rem",
                      fontStyle: "italic",
                      lineHeight: "1.5",
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                      maxHeight:"8rem",
                      maxWidth:"25rem",
                    }}
                  >
                    "{testimonial.quote}"
                  </p>
                </div>

                <div>
                  <h3
                    style={{
                      color: "#0a243a",
                      
                      fontSize: "1.5rem",
                      marginTop: "1rem",
                    }}
                  >
                    {testimonial.name}
                  </h3>
                  <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
