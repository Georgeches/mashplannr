import React from 'react';
import './calendar.css'

const Calendar = () => {
  return (
    <div className="cal">
      <iframe
       src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=UTC&src=YXJhbWFlcmljM0BnbWFpbC5jb20&src=ZW4ua2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043"
       style={{ border: 'solid 1px #777' }}
       width="800"
       height="550"
       margin-top="120px"
       frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Calendar;