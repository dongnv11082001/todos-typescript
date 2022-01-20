import styled from 'styled-components';

const tabs: string[] = ['All', 'Uncomplete', 'Complete'];

type Props = { currentTab: string; handleChangeTab: (newTab: string) => void };

export default function Tab({ currentTab, handleChangeTab }: Props) {
  return (
    <Filters>
      {tabs.map((tab, index) => (
        <span
          key={index}
          className={tab === currentTab ? 'active' : ''}
          onClick={() => handleChangeTab(tab)}
        >
          {tab}
        </span>
      ))}
    </Filters>
  );
}

const Filters = styled.div`
  margin-bottom: 8px;

  & span {
    margin-right: 0.5rem;
    border-radius: 20px;
    border: 2px solid #ff9900;
    padding: 0 10px;
    cursor: pointer;
  }
`;
