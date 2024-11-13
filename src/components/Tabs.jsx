import { useState } from 'react';
import PropTypes from 'prop-types';

export function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  return (
    <div>
      <div className="tabs-list flex mb-4">
        {tabs.map(tab => (
          <button
            key={tab.value}
            className={`tabs-trigger px-4 py-2 ${
              activeTab === tab.value
                ? 'border-b-2 border-dark-brown text-dark-brown'
                : 'text-muted-foreground'
            }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">{tabs.find(tab => tab.value === activeTab)?.content}</div>
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};
