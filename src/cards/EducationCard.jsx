import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Top = styled.div`
    width: 100%;
    display: flex;
    max-width: 100%;
    gap: 12px;
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const School = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary || "#4A90E2"};
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 10px;
    background-color: transparent; /* Remove the white background */
    border-radius: 5px;

    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary || "#6A6A6A"};
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
    background-color: transparent; /* Remove the background */

    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary || "#8A8A8A"};
    margin-top: 4px;
    background-color: transparent; /* Remove the background */

    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary || "#333"};
    margin-top: 10px;
    padding: 10px;
    background-color: transparent; /* Remove the white background */
    border-left: 4px solid #4A90E2;
    border-radius: 5px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

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
                background: "#1d1836",
                color: "#fff",
                boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
                backgroundColor: "rgba(17, 25, 40, 0.83)",
                border: "1px solid rgba(255, 255, 255, 0.125)",
                borderRadius: "6px",
            }}
            contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.3)",
            }}
            date={education?.date}
        >
            <Top>
                <School>
                    {/* You can add a logo or background image here instead of an icon */}
                    <span>{education?.school}</span>
                </School>
                <Body>
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
        img: PropTypes.string, // Optional logo image
        desc: PropTypes.string,
    }).isRequired,
};

export default EducationCard;
