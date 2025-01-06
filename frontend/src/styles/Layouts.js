import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 2rem;
    height: 100%;
    display: flex;
    gap: 2rem;
     @media (max-width: 1024px) {
    padding: 1.5rem;
    border-radius: 24px;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    border-radius: 8px;
  }
`;

export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;
`;
