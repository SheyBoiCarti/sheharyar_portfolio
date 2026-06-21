import { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 80px 16px;
    border-bottom: 2px solid ${({ theme }) => theme.border};
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.h2`
    font-family: "Orbitron", sans-serif;
    font-size: 42px;
    text-align: center;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    text-shadow: 0 0 10px ${({ theme }) => theme.primary}33;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.p`
    font-family: "JetBrains Mono", monospace;
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const ContactForm = styled.form`
    width: 95%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.border};
    padding: 32px;
    clip-path: polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
    margin-top: 28px;
    gap: 16px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const ContactTitle = styled.h3`
    font-family: "Orbitron", sans-serif;
    font-size: 24px;
    margin-bottom: 6px;
    font-weight: 900;
    text-transform: uppercase;
    color: ${({ theme }) => theme.primary};
    text-shadow: 0 0 10px ${({ theme }) => theme.primary}33;
`;

const ContactInput = styled.input`
    flex: 1;
    background-color: ${({ theme }) => theme.bg};
    border: 1px solid ${({ theme }) => theme.border};
    outline: none;
    font-family: "JetBrains Mono", monospace;
    font-size: 14px;
    color: ${({ theme }) => theme.text_primary};
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%);
    padding: 12px 16px;
    
    &:focus {
        border-color: ${({ theme }) => theme.primary};
        box-shadow: 0 0 10px ${({ theme }) => theme.primary}33;
    }
`;

const ContactInputMessage = styled.textarea`
    flex: 1;
    background-color: ${({ theme }) => theme.bg};
    border: 1px solid ${({ theme }) => theme.border};
    outline: none;
    font-family: "JetBrains Mono", monospace;
    font-size: 14px;
    color: ${({ theme }) => theme.text_primary};
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%);
    padding: 12px 16px;
    resize: none;
    
    &:focus {
        border-color: ${({ theme }) => theme.primary};
        box-shadow: 0 0 10px ${({ theme }) => theme.primary}33;
    }
`;

const ContactButton = styled.input`
    width: 100%;
    text-decoration: none;
    text-align: center;
    background: ${({ theme }) => theme.primary};
    padding: 14px 16px;
    margin-top: 10px;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
    border: none;
    color: #0a0a0f;
    font-family: "Orbitron", sans-serif;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 15px ${({ theme }) => theme.primary}55;

    &:hover {
        background: ${({ theme }) => theme.secondary};
        box-shadow: 0 0 25px ${({ theme }) => theme.secondary};
        transform: translateY(-2px);
    }
`;

const Contact = () => {
    const emailRef = useRef();
    const nameRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is empty
        if (
            !emailRef.current.value.trim() ||
            !nameRef.current.value.trim() ||
            !subjectRef.current.value.trim() ||
            !messageRef.current.value.trim()
        ) {
            alert("Please fill in all fields before sending the message.");
            return;
        }

        // Constructing the message explicitly
        const templateParams = {
            from_email: emailRef.current.value,
            from_name: nameRef.current.value,
            subject: subjectRef.current.value,
            message: messageRef.current.value,
        };

        emailjs
            .send(
                "service_8dmeozi", // Replace with your actual service ID
                "template_kngecr9", // Replace with your actual template ID
                templateParams,
                "oKnmenWe_rn_Y45rR" // Replace with your actual public key
            )
            .then(
                () => {
                    alert("Message Sent");
                    // Reset form fields
                    emailRef.current.value = "";
                    nameRef.current.value = "";
                    subjectRef.current.value = "";
                    messageRef.current.value = "";
                },
                (error) => {
                    alert("Failed to send message: " + error.text);
                }
            );
    };


    return (
        <Container id="contact" className="cyber-grid">
            <Wrapper>
                <Title>Secure Link</Title>
                <Desc style={{ marginBottom: "40px" }}>
                    Establish an encrypted handshake to transmit messages directly to Sheharyar.
                </Desc>
                <ContactForm onSubmit={handleSubmit}>
                    <ContactTitle>COMMS.INIT // EMAIL</ContactTitle>
                    <ContactInput
                        placeholder="Your Email"
                        name="from_email"
                        ref={emailRef}
                    />
                    <ContactInput
                        placeholder="Your Name"
                        name="from_name"
                        ref={nameRef}
                    />
                    <ContactInput
                        placeholder="Subject"
                        name="subject"
                        ref={subjectRef}
                    />
                    <ContactInputMessage
                        placeholder="Message"
                        name="message"
                        rows={4}
                        ref={messageRef}
                    />
                    <ContactButton type="submit" value="Send" />
                </ContactForm>
            </Wrapper>
        </Container>
    );
};

export default Contact;

