import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.border};
    clip-path: polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
    padding: 28px 32px;
    display: flex;
    gap: 32px;
    align-items: flex-start;
    position: relative;
    overflow: hidden;
    transition: all 0.35s ease-in-out;
    cursor: default;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background: linear-gradient(180deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
        opacity: 0.8;
        transition: opacity 0.35s ease;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 20px ${({ theme }) => theme.primary}33;
        border-color: ${({ theme }) => theme.primary};

        &::before {
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
        padding: 20px;
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 220px;
    max-width: 220px;
    gap: 6px;
    font-family: "JetBrains Mono", monospace;

    @media (max-width: 768px) {
        min-width: unset;
        max-width: unset;
        width: 100%;
    }
`;

const Company = styled.div`
    font-family: "Orbitron", sans-serif;
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.text_primary};
    line-height: 1.3;
`;

const Role = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
    text-shadow: 0 0 5px ${({ theme }) => theme.primary}44;
    margin-top: 2px;
    text-transform: uppercase;
`;

const DateBadge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 10px;
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary};
    background: ${({ theme }) => theme.bgLight};
    border: 1px solid ${({ theme }) => theme.border};
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%);
    padding: 6px 12px;
    width: fit-content;
`;

const LocationTag = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 6px;
    font-size: 12px;
    color: ${({ theme }) => theme.text_secondary};
    width: fit-content;
`;

const Divider = styled.div`
    width: 1px;
    background: ${({ theme }) => theme.border};
    align-self: stretch;

    @media (max-width: 768px) {
        width: 100%;
        height: 1px;
    }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "JetBrains Mono", monospace;
`;

const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.75;
    margin: 0;
`;

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Left>
                <Company>{experience?.company}</Company>
                <Role>{experience?.role}</Role>
                <DateBadge>
                    {experience?.date}
                </DateBadge>
                {experience?.location && (
                    <LocationTag>
                        LOC // {experience.location}
                    </LocationTag>
                )}
            </Left>

            <Divider />

            <Right>
                <Description>{experience?.desc}</Description>
            </Right>
        </Card>
    );
};

ExperienceCard.propTypes = {
    experience: PropTypes.shape({
        company: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        location: PropTypes.string,
        img: PropTypes.string,
        desc: PropTypes.string,
    }).isRequired,
};

export default ExperienceCard;

