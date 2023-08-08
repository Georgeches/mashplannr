import React from 'react';

const Calendar = () => {
  return (
    <div>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Africa%2FNairobi&src=ZXJpYy5hcmFtYUBzdHVkZW50Lm1vcmluZ2FzY2hvb2wuY29t&color=%23039BE5"
        style={{ border: 'solid 1px #777', width: '800px', height: '600px' }}
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Calendar;