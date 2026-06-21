import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

const Card = styled.div`
    width: 330px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.border};
    clip-path: polygon(0 15px, 15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.3s ease-in-out;
    position: relative;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 0 20px ${({ theme }) => theme.primary}22;
        border-color: ${({ theme }) => theme.primary};
    }
`;

const Image = styled.img`
    width: 100%;
    height: 160px;
    background-color: ${({ theme }) => theme.bgLight};
    clip-path: polygon(0 10px, 10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
    object-fit: cover;
    border: 1px solid ${({ theme }) => theme.border};
    display: ${({ src }) => (src ? "block" : "none")};
    filter: grayscale(20%) contrast(105%);
    transition: all 0.3s ease-in-out;

    ${Card}:hover & {
        filter: grayscale(0%) contrast(100%);
        border-color: ${({ theme }) => theme.primary};
    }
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-family: "JetBrains Mono", monospace;
`;

const Title = styled.h3`
    font-family: "Orbitron", sans-serif;
    font-size: 20px;
    font-weight: 900;
    text-transform: uppercase;
    color: ${({ theme }) => theme.text_primary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Date = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    text-shadow: 0 0 5px ${({ theme }) => theme.primary}33;
`;

const Field = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.6;

    & > strong {
        font-family: "Orbitron", sans-serif;
        font-weight: 700;
        font-size: 11px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.text_primary};
        display: block;
        margin-bottom: 4px;
    }

    ul {
        padding-left: 16px;
        margin-top: 4px;
    }

    li {
        margin-bottom: 2px;
    }
`;

const SeeMoreToggle = styled.div`
    font-family: "Orbitron", sans-serif;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.secondary};
    cursor: pointer;
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
    
    &:hover {
        color: ${({ theme }) => theme.primary};
        text-shadow: 0 0 8px ${({ theme }) => theme.primary};
    }
`;

const Members = styled.div`
    display: flex;
    align-items: center;
    margin-top: auto;
    padding-top: 10px;
    border-top: 1px solid ${({ theme }) => theme.border};
`;

const Avatar = styled.img`
    width: 32px;
    height: 32px;
    clip-path: polygon(0 6px, 6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%);
    margin-right: 6px;
    background-color: ${({ theme }) => theme.bgLight};
    border: 1px solid ${({ theme }) => theme.border};
`;

const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const knownFields = ["title", "description", "date", "member", "image"];

    const dynamicFields = Object.keys(project).filter(
        (key) => !knownFields.includes(key)
    );

    const toggleExpand = (e) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    return (
        <Card onClick={toggleExpand}>
            <Image src={project.image} />
            <Details>
                <Title>{project.title}</Title>
                <Date>DATE // {project.date}</Date>

                <Field>
                    <strong>Description:</strong>
                    <span className="description-text">
                        {project.description}
                    </span>
                </Field>

                {isExpanded && (
                    <>
                        {dynamicFields.map((field, index) => (
                            <Field key={index}>
                                <strong>{field}:</strong>
                                {Array.isArray(project[field]) ? (
                                    <ul>
                                        {project[field].map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    project[field]
                                )}
                            </Field>
                        ))}
                    </>
                )}

                <SeeMoreToggle onClick={toggleExpand}>
                    {isExpanded ? "[ Close log ]" : "[ Read log... ]"}
                </SeeMoreToggle>
            </Details>

            {project.member && project.member.length > 0 && (
                <Members>
                    {project.member.map((member, index) => (
                        <Avatar key={index} src={member.img} />
                    ))}
                </Members>
            )}
        </Card>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        member: PropTypes.arrayOf(
            PropTypes.shape({
                img: PropTypes.string.isRequired,
            })
        ),
    }).isRequired,
};

export default ProjectCard;

