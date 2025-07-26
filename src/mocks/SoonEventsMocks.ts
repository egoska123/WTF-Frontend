// src/mocks/SoonEventsByMonth.ts

import { SoonEvent } from "../components/SoonEvents/SoonEvents";


const SoonEventsByMonth: Record<number, SoonEvent[]> = {
  1: [ // Январь 2025
    { color: 'purple', singleDate: '3 января',  title: 'Событие 3 января',  time: 'Начало в 10:00' },
    { color: 'teal',   singleDate: '11 января', title: 'Событие 11 января', time: 'Начало в 11:00' },
    { color: 'yellow', singleDate: '22 января', title: 'Событие 22 января', time: 'Начало в 12:00' },
    { color: 'blue',   singleDate: '29 января', title: 'Событие 29 января', time: 'Начало в 13:00' },
  ],
  2: [ // Февраль 2025
    { color: 'teal',   singleDate: '5 февраля',  title: 'Событие 5 февраля',  time: 'Начало в 10:00' },
    { color: 'purple', singleDate: '13 февраля', title: 'Событие 13 февраля', time: 'Начало в 11:00' },
    { color: 'blue',   singleDate: '18 февраля', title: 'Событие 18 февраля', time: 'Начало в 12:00' },
    { color: 'yellow', singleDate: '26 февраля', title: 'Событие 26 февраля', time: 'Начало в 13:00' },
  ],
  3: [ // Март 2025
    { color: 'yellow', singleDate: '2 марта',  title: 'Событие 2 марта',  time: 'Начало в 10:00' },
    { color: 'blue',   singleDate: '9 марта',  title: 'Событие 9 марта',  time: 'Начало в 11:00' },
    { color: 'purple', singleDate: '17 марта', title: 'Событие 17 марта', time: 'Начало в 12:00' },
    { color: 'teal',   singleDate: '28 марта', title: 'Событие 28 марта', time: 'Начало в 13:00' },
  ],
  4: [ // Апрель 2025
    { color: 'blue',   singleDate: '1 апреля',  title: 'Событие 1 апреля',  time: 'Начало в 10:00' },
    { color: 'yellow', singleDate: '14 апреля', title: 'Событие 14 апреля', time: 'Начало в 11:00' },
    { color: 'purple', singleDate: '19 апреля', title: 'Событие 19 апреля', time: 'Начало в 12:00' },
    { color: 'teal',   singleDate: '27 апреля', title: 'Событие 27 апреля', time: 'Начало в 13:00' },
  ],
  5: [ // Май 2025
    { color: 'purple', singleDate: '4 мая',   title: 'Событие 4 мая',   time: 'Начало в 10:00' },
    { color: 'teal',   singleDate: '12 мая',  title: 'Событие 12 мая',  time: 'Начало в 11:00' },
    { color: 'yellow', singleDate: '21 мая',  title: 'Событие 21 мая',  time: 'Начало в 12:00' },
    { color: 'blue',   singleDate: '30 мая',  title: 'Событие 30 мая',  time: 'Начало в 13:00' },
  ],
  6: [ // Июнь 2025
    { color: 'teal',   singleDate: '6 июня',   title: 'Событие 6 июня',   time: 'Начало в 10:00' },
    { color: 'yellow', singleDate: '15 июня',  title: 'Событие 15 июня',  time: 'Начало в 11:00' },
    { color: 'purple', singleDate: '20 июня',  title: 'Событие 20 июня',  time: 'Начало в 12:00' },
    { color: 'blue',   singleDate: '29 июня',  title: 'Событие 29 июня',  time: 'Начало в 13:00' },
  ],
  7: [ // Июль 2025
    { color: 'yellow', singleDate: '3 июля',   title: 'Событие 3 июля',   time: 'Начало в 10:00' },
    { color: 'purple', singleDate: '10 июля',  title: 'Событие 10 июля',  time: 'Начало в 11:00' },
    { color: 'teal',   singleDate: '18 июля',  title: 'Событие 18 июля',  time: 'Начало в 12:00' },
    { color: 'blue',   singleDate: '25 июля',  title: 'Событие 25 июля',  time: 'Начало в 13:00' },
  ],
  8: [ // Август 2025
    { color: 'purple', singleDate: '2 августа',  title: 'Событие 2 августа',  time: 'Начало в 10:00' },
    { color: 'teal',   singleDate: '11 августа', title: 'Событие 11 августа', time: 'Начало в 11:00' },
    { color: 'yellow', singleDate: '19 августа', title: 'Событие 19 августа', time: 'Начало в 12:00' },
    { color: 'blue',   singleDate: '27 августа', title: 'Событие 27 августа', time: 'Начало в 13:00' },
  ],
  9: [ // Сентябрь 2025
    { color: 'teal',   singleDate: '5 сентября',  title: 'Событие 5 сентября',  time: 'Начало в 10:00' },
    { color: 'yellow', singleDate: '13 сентября', title: 'Событие 13 сентября', time: 'Начало в 11:00' },
    { color: 'blue',   singleDate: '17 сентября', title: 'Событие 17 сентября', time: 'Начало в 12:00' },
    { color: 'purple', singleDate: '29 сентября', title: 'Событие 29 сентября', time: 'Начало в 13:00' },
  ],
  10: [ // Октябрь 2025
    { color: 'yellow', singleDate: '1 октября',   title: 'Событие 1 октября',   time: 'Начало в 10:00' },
    { color: 'blue',   singleDate: '7 октября',   title: 'Событие 7 октября',   time: 'Начало в 11:00' },
    { color: 'purple', singleDate: '16 октября',  title: 'Событие 16 октября',  time: 'Начало в 12:00' },
    { color: 'teal',   singleDate: '24 октября',  title: 'Событие 24 октября',  time: 'Начало в 13:00' },
  ],
  11: [ // Ноябрь 2025
    { color: 'blue',   singleDate: '6 ноября',    title: 'Событие 6 ноября',    time: 'Начало в 10:00' },
    { color: 'purple', singleDate: '14 ноября',   title: 'Событие 14 ноября',   time: 'Начало в 11:00' },
    { color: 'teal',   singleDate: '22 ноября',   title: 'Событие 22 ноября',   time: 'Начало в 12:00' },
    { color: 'yellow', singleDate: '30 ноября',   title: 'Событие 30 ноября',   time: 'Начало в 13:00' },
  ],
  12: [ // Декабрь 2025
    { color: 'purple', singleDate: '4 декабря',   title: 'Событие 4 декабря',   time: 'Начало в 10:00' },
    { color: 'teal',   singleDate: '12 декабря',  title: 'Событие 12 декабря',  time: 'Начало в 11:00' },
    { color: 'yellow', singleDate: '21 декабря',  title: 'Событие 21 декабря',  time: 'Начало в 12:00' },
    { color: 'blue',   singleDate: '29 декабря',  title: 'Событие 29 декабря',  time: 'Начало в 13:00' },
  ],
};

export default SoonEventsByMonth;
