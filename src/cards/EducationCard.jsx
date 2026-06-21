import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Top = styled.div`
    width: 100%;
    display: flex;
    max-width: 100%;
    gap: 12px;
    font-family: "JetBrains Mono", monospace;
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const School = styled.div`
    font-family: "Orbitron", sans-serif;
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 0;
    background-color: transparent;

    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Degree = styled.div`
    font-family: "JetBrains Mono", monospace;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.secondary};
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
    background-color: transparent;

    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Date = styled.div`
    font-family: "JetBrains Mono", monospace;
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 4px;
    background-color: transparent;

    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    width: 100%;
    font-family: "JetBrains Mono", monospace;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 10px;
    padding: 12px;
    background-color: ${({ theme }) => theme.bgLight}80;
    border-left: 2px solid ${({ theme }) => theme.primary};
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%);

    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Span = styled.div`
    display: -webkit-box;
    max-width: 100%;
`;

const EducationCard = ({ education }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background: "#12121a",
                color: "#e0e0e0",
                boxShadow: "0 0 15px rgba(0, 255, 136, 0.05)",
                border: "1px solid #2a2a3a",
                borderRadius: "0px",
            }}
            contentArrowStyle={{
                borderRight: "7px solid #2a2a3a",
            }}
            iconStyle={{
                background: "#12121a",
                boxShadow: "0 0 0 4px #00ff88, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
            }}
            date={education?.date}
        >
            <Top>
                <Body>
                    <School>
                        <span>{education?.school}</span>
                    </School>
                    <Degree>
                        {education?.degree}
                    </Degree>
                    <Date>{education?.date}</Date>
                </Body>
            </Top>

            <Description>
                {education?.desc && <Span>{education.desc}</Span>}
            </Description>
        </VerticalTimelineElement>
    );
};

EducationCard.propTypes = {
    education: PropTypes.shape({
        school: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        img: PropTypes.string,
        desc: PropTypes.string,
    }).isRequired,
};

export default EducationCard;

