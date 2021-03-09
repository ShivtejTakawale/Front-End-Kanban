import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'High Performance',
    content: 'Work in process is transperent,so we avoid obstacles easily and ensures smooth workflow.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Transperent Workflow',
    content: 'In one view, easily see how much work has been completed last week and by whom.',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Simplified Management',
    content: 'Plan projects better by assigning tasks to people based on their expertise.',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>The kanban software you love</p>
        </div>
        <div className="contentHolder">
          <p>

          A warm welcome to kanban.Our company ethos is to provide an outstanding service to you, the customer, alongside top quality crafting products and the latest innovative ideas.

We pride ourselves in our design and manufacturing capability and are committed to manufacturing the very best quality products and on trend designs, having spent many years in the industry.

Our retail website offers you many well known brands alongside Kanban Crafts products. If you cannot find what you are looking for please do not hesitate to contact us and we will do our best to locate it for you.

Thank you for taking the time to visit our website.


<div>With Best Wishes</div>

<div>Team Kanban.</div></p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;