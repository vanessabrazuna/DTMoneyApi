import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border: 0;
    border-radius: 6px;
    background: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    border: 1px solid ${props => props.theme['green-300']};
    border-radius: 6px;
    background: transparent;
    color: ${props => props.theme['green-300']};
    padding: 1rem;
    font-weight: bold;

    &:hover {
      border-color: 1px solid ${props => props.theme['green-500']};
      background: ${props => props.theme['green-500']};
      color: ${props => props.theme.white};
      transition: all .2s;
    }
  }
`
