import styled from '@emotion/styled';

export const SelectContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 34px;
  @media screen and (min-width: 768px) {
    gap: 18px;
    margin-bottom: 50px;
  }
`;

export const SelectName = styled.p`
  color: var(--greyText);
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 8px;
`;

export const FromToContainer = styled.div`
  display: flex;
`;

export const customSelectFrom = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '14px',
    width: '156px',
    height: '38px',
    border: 'none',
    paddingLeft: '8px',
    backgroundColor: '#F7F7FB',
    'div div': {
      fontWeight: '500',
      fontSize: '18px',
    },
    '@media screen and (min-width: 768px)': {
      width: '224px',
      height: '48px',
      paddingLeft: '18px',
    },
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '14px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'var(--inputBg)' : 'transparent',
    color: 'var(--inputTexst)',
    fontWeight: '500px',
    fontSize: '16px',
    lineHeight: '20px',
  }),
  input: provided => ({
    ...provided,
    fontWeight: '500',
    fontSize: '18px',
    color: 'var(--mainTextCl)',
  }),
};

export const customSelectTo = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '14px',
    width: '105px',
    height: '38px',
    border: 'none',
    paddingLeft: '8px',
    backgroundColor: '#F7F7FB',
    'div div': {
      fontWeight: '500',
      fontSize: '18px',
    },
    '@media screen and (min-width: 768px)': {
      width: '125px',
      height: '48px',
      paddingLeft: '18px',
    },
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '14px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'var(--inputBg)' : 'transparent',
    color: 'var(--inputTexst)',
    fontWeight: '500px',
    fontSize: '16px',
    lineHeight: '20px',
  }),
  input: provided => ({
    ...provided,
    fontWeight: '500',
    fontSize: '18px',
    color: 'var(--mainTextCl)',
  }),
};

export const ToInput = styled.input`
  display: block;
  width: 98px;
  height: 38px;
  padding-left: 18px;
  font-weight: 500;
  font-size: 18px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  border: none;
  background-color: var(--inputBg);
  &:focus-visible {
    outline: var(--blueCl) solid 1px;
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 48px;
    padding-left: 24px;
  }
`;

export const FromInput = styled.input`
  display: block;
  width: 98px;
  height: 38px;
  padding-left: 18px;
  font-weight: 500;
  font-size: 18px;
  border: none;
  background-color: var(--inputBg);
  border-bottom-left-radius: 14px;
  border-top-left-radius: 14px;
  border-right: 1px solid var(--inputTexst);
  &:focus-visible {
    outline: var(--blueCl) solid 1px;
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 48px;
    padding-left: 24px;
  }
`;

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  background-color: var(--blueCl);
  color: var(--whiteCl);
  border-radius: 12px;
  line-height: 20px;
  height: 38px;
  width: 92px;

  @media screen and (min-width: 768px) {
    height: 48px;
    width: 136px;
  }
`;