import flatpickr from '../../node_modules/flatpickr';
import '../../node_modules/flatpickr/dist/flatpickr.min.css';
import '../../node_modules/flatpickr/dist/themes/light.css';

const start = document.querySelector(`#startID`);
const end = document.querySelector(`#endID`);

flatpickr(start, {
  dateFormat: "Y-m-d",
  altInput: true,
  altFormat: "j.m.Y",
  minDate: new Date(),
  "plugins": [new rangePlugin({ input: end})],
  onChange: [function(selectedDates){
      const dateArr = selectedDates.map(date => this.formatDate(date, "Y-m-d"));
      $('#startID').val(dateArr[0]);
  }]
});
