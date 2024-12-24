import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

// Styled Components
const Card = styled.div`
    width: 330px;
    height: ${({ isExpanded }) => (isExpanded ? "auto" : "350px")}; /* Dynamic height */
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: all 0.4s ease;
    position: relative; /* Enable positioning for child elements */

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        filter: brightness(1.05);
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    max-height: 150px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    display: ${({ src }) => (src ? "block" : "none")};
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 2px;
    position: relative;
`;

const Title = styled.div`
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Date = styled.div`
    font-size: 14px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
`;

const Field = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin-top: 8px;
    padding: 0;

    & > strong {
        font-weight: 600;
    }

    .description-text {
        padding-right: 10px; /* Optional for extra spacing */
        box-sizing: border-box;
        display: block;
        overflow: hidden;
    }
`;

const SeeMoreToggle = styled.a`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    cursor: pointer;
    text-decoration: none;
    margin-top: 8px;
`;

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 5px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // List of fields you want to handle separately (known fields)
    const knownFields = ["title", "description", "date", "member", "image"];

    // Filter out the known fields
    const dynamicFields = Object.keys(project).filter(
        (key) => !knownFields.includes(key)
    );

    return (
        <Card
            onClick={() => setIsExpanded(!isExpanded)}
            isExpanded={isExpanded}
        >
            <Image src={project.image} />
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>

                <Field isExpanded={isExpanded}>
                    <strong>Description:</strong>
                    <div className="description-text">
                        {project.description}
                    </div>
                </Field>

                {/* Display the rest of the content when expanded */}
                {isExpanded && (
                    <>
                        {dynamicFields.map((field, index) => (
                            <Field key={index}>
                                <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong>
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

                {/* Always show "See More" or "See Less" */}
                <SeeMoreToggle onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? "See less" : "See more..."}
                </SeeMoreToggle>
            </Details>

            <Members>
                {project.member &&
                    project.member.map((member, index) => (
                        <Avatar key={index} src={member.img} />
                    ))}
            </Members>
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
