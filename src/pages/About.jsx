// function About(){
//     return (
//         <div>
//             <H1>About Us</H1>
//         </div>
//     );
// }

// export default About;



// function About() {
//   return (
//     <div style={styles.container}>
//     <div style={styles.card}>
//         <img src="/aboutus.jpg" alt="about us" style={styles.image} />
//     </div>
//       <h1>About Us</h1>

//       <p style={styles.text}>
//         Welcome to My Store! 
//       </p>

      
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "30px",
//     textAlign: "center",
//   },
//   text: {
//     fontSize: "18px",
//     margin: "10px 0",
//     color: "#333",
//   },
//   card: {
//     backgroundColor: "white",
//     padding: "30px",
//     borderRadius: "12px",
//     maxWidth: "900px",
//     margin: "auto",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//   },
//   image: {
//     borderRadius: "50%",
//     marginBottom: "15px",
//   },
// };


// export default About;





// claude code

function About() {
  const values = [
    { icon: "✦", title: "Quality First", desc: "Every product is handpicked and quality-checked before it reaches you." },
    { icon: "◈", title: "Customer Love", desc: "We obsess over your experience — before, during, and after every order." },
    { icon: "⬡", title: "Honest Pricing", desc: "No hidden fees, no gimmicks. Just fair prices for great products." },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .about-root {
          min-height: 100vh;
          background: #faf8f5;
          font-family: 'Jost', sans-serif;
          color: #1a1a1a;
        }

        /* ── Hero ── */
        .about-hero {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 88vh;
          overflow: hidden;
        }

        .hero-image-wrap {
          position: relative;
          overflow: hidden;
        }

        .hero-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.88) saturate(1.1);
          transition: transform 8s ease;
        }

        .hero-image-wrap:hover img {
          transform: scale(1.04);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15,10,5,0.18) 0%, transparent 70%);
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 70px;
          background: #1a1612;
          color: #f5f0e8;
          position: relative;
        }

        .hero-eyebrow {
          font-size: 0.72rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 24px;
          font-weight: 500;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 600;
          line-height: 1.08;
          color: #f5f0e8;
          margin-bottom: 28px;
        }

        .hero-title em {
          font-style: italic;
          color: #c9a96e;
        }

        .hero-divider {
          width: 48px;
          height: 2px;
          background: #c9a96e;
          margin-bottom: 28px;
        }

        .hero-text {
          font-size: 1.05rem;
          line-height: 1.85;
          color: rgba(245,240,232,0.65);
          font-weight: 300;
          max-width: 420px;
        }

        .hero-badge {
          position: absolute;
          bottom: 48px;
          right: 70px;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 1px solid rgba(201,169,110,0.4);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #c9a96e;
          font-size: 0.6rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-align: center;
          line-height: 1.6;
        }

        .hero-badge strong {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 600;
          display: block;
          letter-spacing: 0;
          line-height: 1;
        }

        /* ── Values ── */
        .values-section {
          padding: 100px 60px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-label {
          font-size: 0.7rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #c9a96e;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .section-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          color: #1a1612;
          margin-bottom: 56px;
          line-height: 1.15;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: #e8e2d9;
        }

        .value-card {
          background: #faf8f5;
          padding: 48px 36px;
          transition: background 0.25s;
        }

        .value-card:hover {
          background: #1a1612;
        }

        .value-card:hover .value-title,
        .value-card:hover .value-desc {
          color: #f5f0e8;
        }

        .value-icon {
          font-size: 1.5rem;
          color: #c9a96e;
          margin-bottom: 20px;
          display: block;
        }

        .value-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: #1a1612;
          margin-bottom: 12px;
          transition: color 0.25s;
        }

        .value-desc {
          font-size: 0.92rem;
          line-height: 1.75;
          color: #6b6560;
          font-weight: 300;
          transition: color 0.25s;
        }

        /* ── Story ── */
        .story-section {
          background: #1a1612;
          padding: 100px 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .story-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          background: rgba(201,169,110,0.15);
        }

        .stat-box {
          background: #1a1612;
          padding: 40px 32px;
          border: 1px solid rgba(201,169,110,0.1);
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 600;
          color: #c9a96e;
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.75rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(245,240,232,0.4);
          font-weight: 400;
        }

        .story-text-wrap .section-label { color: #c9a96e; }

        .story-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 600;
          color: #f5f0e8;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .story-body {
          font-size: 0.97rem;
          line-height: 1.9;
          color: rgba(245,240,232,0.5);
          font-weight: 300;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .about-hero { grid-template-columns: 1fr; min-height: auto; }
          .hero-image-wrap { height: 50vw; }
          .hero-content { padding: 60px 36px; }
          .hero-badge { display: none; }
          .values-grid { grid-template-columns: 1fr; }
          .story-section { grid-template-columns: 1fr; padding: 60px 36px; gap: 48px; }
          .values-section { padding: 60px 36px; }
        }
      `}</style>

      <div className="about-root">

        {/* Hero */}
        <section className="about-hero">
          <div className="hero-image-wrap">
            <img src="/aboutus.jpg" alt="About My Store" />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <p className="hero-eyebrow">Our Story</p>
            <h1 className="hero-title">
              Crafted with<br /><em>care & purpose</em>
            </h1>
            <div className="hero-divider" />
            <p className="hero-text">
              Welcome to My Store — where every product is chosen with intention,
              and every customer is treated like family. We started small, and
              that spirit has never left us.
            </p>
            <div className="hero-badge">
              <strong>10+</strong>
              Years of<br />Trust
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="values-section">
          <p className="section-label">What we stand for</p>
          <h2 className="section-heading">Built on three simple beliefs</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <span className="value-icon">{v.icon}</span>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story + Stats */}
        <section className="story-section">
          <div className="story-stats">
            {[
              { n: "10K+", l: "Happy Customers" },
              { n: "500+", l: "Products" },
              { n: "98%", l: "Satisfaction Rate" },
              { n: "24/7", l: "Support" },
            ].map((s) => (
              <div className="stat-box" key={s.l}>
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="story-text-wrap">
            <p className="section-label">Our journey</p>
            <h2 className="story-heading">From a small idea to something real</h2>
            <p className="story-body">
              My Store was born from a simple frustration — great products were
              hard to find at honest prices. So we decided to build the store
              we always wished existed. Every decision since then has been guided
              by one question: would our customers be proud of this?
            </p>
          </div>
        </section>

      </div>
    </>
  );
}

export default About;