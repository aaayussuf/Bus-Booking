import React, { useState } from 'react';
import location from '../pictures/Screenshot from 2025-05-20 15-48-34.png'; 
import emailLogo from '../pictures/Screenshot from 2025-05-20 15-48-48.png';
import phoneLogo from '../pictures/Screenshot from 2025-05-20 15-48-58.png';
import clockLogo from '../pictures/Screenshot from 2025-05-20 15-48-34.png';

const styles = {
  container: {
    maxWidth: '112rem',
    margin: '0 auto',
    padding: '3rem 1rem',
  },
  heading: {
    fontSize: '2.25rem',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '2.5rem',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  infoGridMd: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  infoBlock: {},
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0.5rem',
  },
  icon: {
    height: '1.5rem',
    width: '1.5rem',
  },
  infoTitle: {
    fontWeight: 600,
  },
  infoText: {
    fontSize: '0.875rem',
    marginTop: '0.5rem',
    lineHeight: 1.4,
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1rem',
  },
  formMd: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  input: {
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    padding: '0.75rem',
    width: '100%',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  textarea: {
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    padding: '0.75rem',
    width: '100%',
    fontSize: '1rem',
    boxSizing: 'border-box',
    resize: 'vertical',
    gridColumn: 'span 1',
    minHeight: '6rem',
  },
  textareaMd: {
    gridColumn: 'span 3',
  },
  buttonWrapper: {
    gridColumn: 'span 1',
    textAlign: 'center',
  },
  buttonWrapperMd: {
    gridColumn: 'span 3',
  },
  button: {
    backgroundColor: '#fbbf24',
    color: 'white',
    fontWeight: 'bold',
    padding: '0.5rem 1.5rem',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#f59e0b',
  },
  submittedMessage: {
    color: '#16a34a',
    textAlign: 'center',
    marginTop: '1rem',
  },
};

function useMediaQuery(query) {
  const [matches, setMatches] = React.useState(false);
  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);
  return matches;
}

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);

  const isMd = useMediaQuery('(min-width: 768px)');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can integrate an API call here
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>

      <div
        style={{
          ...styles.infoGrid,
          ...(isMd ? styles.infoGridMd : {}),
        }}
      >
        <div style={styles.infoBlock}>
          <div style={styles.iconWrapper}>
            <img src={location} alt="Location" style={styles.icon} />
          </div>
          <h3 style={styles.infoTitle}>Our Office Address</h3>
          <p style={styles.infoText}>
            Palm Court Bldg M, 501/B, 5th Floor,
            <br />
            New Link Road, Beside Goregaon Sports Complex,
            <br />
            Malad West, Mumbai, Maharashtra 400064
          </p>
        </div>
        <div style={styles.infoBlock}>
          <div style={styles.iconWrapper}>
            <img src={emailLogo} alt="Email" style={styles.icon} />
          </div>
          <h3 style={styles.infoTitle}>General Enquiries</h3>
          <p style={styles.infoText}>websupport@justdial.com</p>
        </div>
        <div style={styles.infoBlock}>
          <div style={styles.iconWrapper}>
            <img src={phoneLogo} alt="Phone" style={styles.icon} />
          </div>
          <h3 style={styles.infoTitle}>Call Us</h3>
          <p style={styles.infoText}>+91-8888888888</p>
        </div>
        <div style={styles.infoBlock}>
          <div style={styles.iconWrapper}>
            <img src={clockLogo} alt="Clock" style={styles.icon} />
          </div>
          <h3 style={styles.infoTitle}>Our Timings</h3>
          <p style={styles.infoText}>Mon - Sun : 10:00 AM - 07:00 PM</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          ...styles.form,
          ...(isMd ? styles.formMd : {}),
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          style={{
            ...styles.textarea,
            ...(isMd ? styles.textareaMd : {}),
          }}
          required
        ></textarea>
        <div
          style={{
            ...styles.buttonWrapper,
            ...(isMd ? styles.buttonWrapperMd : {}),
          }}
        >
          <button
            type="submit"
            style={{
              ...styles.button,
              ...(buttonHover ? styles.buttonHover : {}),
            }}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            Submit
          </button>
        </div>
      </form>

      {submitted && (
        <p style={styles.submittedMessage}>
          Thank you for contacting us! We will get back to you shortly.
        </p>
      )}
    </div>
  );
};

export default ContactPage;
