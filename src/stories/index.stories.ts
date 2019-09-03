import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
// import { KnobService} from '../app/services/knob.service';
import { linkTo } from '@storybook/addon-links';
import { KnobComponent } from '../app/knob/knob.component'
// const stories = storiesOf('Storybook Knobs', module);
import { WeatherComponent } from './../app/weather/weather.component'
import { Welcome, Button } from '@storybook/angular/demo';

import { HttpClientModule } from '@angular/common/http';
import markdownNotes from '../app/weather/weatherreadme.md';
import markdownNots from '../app/activity/activityreadme.md';
import { AllKnobsComponent } from '../app/all-knobs/all-knobs.component';
import {HomeComponent} from '../app/home/home.component'
import {CheckboxComponent} from '../app/checkbox/checkbox.component'

import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  radios,
  color,
  date,
  button,
} from '@storybook/addon-knobs';
import { ActivityComponent } from '../app/activity/activity.component';
import { withA11y } from '@storybook/addon-a11y';
import { WeatherService } from '../app/services/weather.service';
import { ActivityService } from '../app/services/activity.service';
import { CheckboxService } from 'src/app/services/checkbox.service';
import { AboutusComponent } from '../app/aboutus/aboutus.component'


storiesOf('MAC CLUB', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      
      imports: [HttpClientModule],
      declarations: [WeatherComponent, HomeComponent,ActivityComponent, CheckboxComponent, AboutusComponent  ], 
      providers: [WeatherService, ActivityService,CheckboxService ]
    }),
  )
  .add('Home', () => {
    return {
      template: '<app-home></app-home>',
      props: {}
    }
  }, {
      notes: { markdown: markdownNots }
    })
  // ************MAC FORM******************
  .add('Partner', () => {
    return {
      template: '<app-weather></app-weather>',
      props: {

      }
    };
  }, {
      notes: { markdown: markdownNotes }
    })
  // *-********************MAC ACTIVITY*****************
  .add('Activity',() => {
    return{
      template:'<app-activity> </app-activity>',
      props:{}
    }
  },
  
  {
    notes:{}

  })


    .add('Team',() => {
      return{
        template:'<app-checkbox> </app-checkbox>',
        props:{}
      }
    },
    
    {
      notes:{}

    })
.add('About us',() => {
  return{
    template:'<app-aboutus> </app-aboutus>',
    props:{}
      }

},
{
  notes:{}
}
)

storiesOf('Rider', module)
  .add('Male', () => ({
   component: Button,
  //  template:'<app-aboutus></app-aboutus>',
   props: {
    text: ' Back to Basic 😀 😎 👍 💯  ' ,

    onClick: linkTo('MAC ClUB'),
    
  },
}));



//************************** */ KNOBS CREATION*******************

// storiesOf('Mac|Knobs', module)
//   .addDecorator(
//     moduleMetadata({
//       imports: [HttpClientModule],
//       declarations: [AllKnobsComponent, KnobComponent],
//       providers: []
//     })
//   )
//   .addParameters({
//     knobs: {
//       disableDebounce: true,
//     },
//   })
// storiesOf('Mac|Knobs', module)
//   .addParameters({
//     knobs: {
//       disableDebounce: true,
//     },
//   })
//   .addDecorator(withKnobs)
//   .add('Simple', () => {
//     const name = text('name', 'John Doe');
//     const age = number('age', 0);
//     const phoneNumber = text('phoneNumber', '555-55-55');

//     return {
//       moduleMetadata: {
//         entryComponents: [KnobComponent],
//         declarations: [KnobComponent],
//       },
//       template: `
//         <h1> This is a template </h1>
//         <storybook-knob-component
//           [age]="age"
//           [phoneNumber]="phoneNumber"
//           [name]="name"
//         >
//         </storybook-knob-component>
//       `,
//       props: {
//         name,
//         age,
//         phoneNumber,
//       },
//     };
//   })
//   .add('All knobs', () => {
//     const name = text('name', 'Maitri Adventure Club');
//     const stock = number('stock', 20, {
//       range: true,
//       min: 0,
//       max: 30,
//       step: 5,
//     });
//     const fruits = {
//       Apple: 'apples',
//       Banana: 'bananas',
//       Cherry: 'cherries',
//     };
//     const fruit = select('fruit', fruits, 'apples');
//     const otherFruits = {
//       Kiwi: 'kiwi',
//       Guava: 'guava',
//       Watermelon: 'watermelon',
//     };
//     const otherFruit = radios('Other Fruit', otherFruits, 'watermelon');
//     const price = number('price', 2.25);

//     const border = color('border', 'deeppink');
//     const today = date('today', new Date('Jan 20 2017'));
//     const items = array('items', ['Laptop', 'Book', 'Whiskey']);
//     const nice = boolean('nice', true);
//     button('Arbitrary action', action('You clicked it!'));

//     return {
//       component: AllKnobsComponent,
//       props: {
//         name,
//         stock,
//         fruit,
//         otherFruit,
//         price,
//         border,
//         today,
//         items,
//         nice,
//       },
//     };
//   })

// *******************ACTION CREATED*********************





// import { storiesOf } from '@storybook/html';
// import { withActions } from '@storybook/addon-actions';

// storiesOf('button', module)
//   // Log mouseovers on entire story and clicks on .btn
//   .addDecorator(withActions('mouseover', 'click .btn'))
//   .add('with actions', () => `
//     <div>
//       Clicks on this button will be logged: <button className="btn" type="button">Button</button>
//     </div>
//   `);