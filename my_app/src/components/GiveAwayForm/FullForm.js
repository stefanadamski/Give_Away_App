import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import './full_form.scss';

let FullForm = props => {
  const {
    whatToGiveValue,
    bagsValue,
    cityValue,
    receiverValue,
    fullAddress,
    fullDate,
    handleSubmit,
    pristine,
    reset,
    submitting,
  } = props;

  const [formStep, setFormStep] = useState(1);

  const completeFormStep = () => {
        setFormStep(prev => prev + 1);
  }
  const goToPreviousStep = () => {
        setFormStep(prev => prev - 1);
  }
  const FirstStep = () => {
    const things = ['ubrania, które nadają się do ponownego użycia',
        'ubrania do wyrzucenia', 'zabawki', 'książki', 'inne']
    return (
        <div>
            <span> Krok 1/4 </span>
            <h1> Zaznacz co chcesz oddać:</h1>
            <Field name='whatToGive' component='checkbox'>
                {things.map((el) => (<div>
                        <input type="radio" value={el} name="option"/>
                        <label form="option">{el}</label>
                    </div>
                ))}
            </Field>
        </div>)
  }
  const SecondStep = () => {
    const quantity = [1,2,3,4,5]
    return (
        <div>
            <span> Krok 2/4 </span>
            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
            <Field name="bags" component="select">
                {quantity.map((el) => (
                    <option value={el}>{el}</option>
                ))}
            </Field>
        </div>)
  }

  const ThirdStep = () => {
    const cities = ["Poznań", "Kraków", "Warszawa", "Wrocław", "Katowice"];
    const receivers = ["dzieciom", "samotnym matkom", "bezdomnym", "niepełnosprawnym", "osobom starszym"];
    return (
        <div>
            <span> Krok 3/4 </span>
            <h1> Lokalizacja: </h1>
            <Field name='city' component='select'>
                {cities.map((el) => (
                    <option value={el}>{el}</option>
                ))}
            </Field>
            <h2> Komu chcesz pomóc? </h2>
            <Field name='receiver' component="checkbox">
                {receivers.map(
                    (el,i) => (<div>
                        <label form="option">{el}</label>
                        <input type="radio" value={el} name="option"/>
                    </div>)
                )}
            </Field>
            <h2> Wpisz nazwę konkretnej organizacji (opcjonalnie) </h2>
            <Field
                name="organization"
                component="input"
                type="text"
                placeholder="organizacja"
            />
        </div>)
  }
  const FourthStep = () => {
    return (
        <div>
            <span> Krok 4/4 </span>
            <h1> Podaj adres oraz termin odbioru rzecz przez kuriera </h1>
            <div className='address_date'>
                <div className='address'>
                    <div>
                        <label>Ulica</label>
                        <div>
                            <Field
                                name="street"
                                component="input"
                                type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Miasto</label>
                        <div>
                            <Field
                                name="city2"
                                component="input"
                                type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Kod</label>
                        <div>
                            <Field
                                name="code"
                                component="input"
                                type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Numer telefonu</label>
                        <div>
                            <Field
                                name="phone"
                                component="input"
                                type="tel"
                            />
                        </div>
                    </div>
                </div>
                <div className='date'>
                    <div>
                        <label>Data</label>
                        <div>
                            <Field
                                name="date"
                                component="input"
                                type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Godzina</label>
                        <div>
                            <Field
                                name="hour"
                                component="input"
                                type="time"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Uwagi dla kuriera</label>
                        <div>
                            <Field
                                name="comments"
                                component="input"
                                type="text"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
  }
  const Summary = () => {
      return (
          <div>
              <div>
                  {bagsValue}
                  {receiverValue}
                  {cityValue}
                  {fullAddress}
                  {fullDate}
                  {whatToGiveValue}
              </div>
          </div>)
  }

  const ThankYou = () => {
        return (
            <div>
                <div>
                    <div>
                        <h1> Dziękujemy za przesłanie formularza.<br/>
                            Na maila przślemy wszelkie informacje o odbiorze</h1>
                    </div>
                </div>
            </div>)
  }
  return (
      <div>
          <div className='form_steps'>
              <form onSubmit={handleSubmit}>
                  {formStep === 1 && (<FirstStep/>)}
                  {formStep === 2 && (<SecondStep/>)}
                  {formStep === 3 && (<ThirdStep/>)}
                  {formStep === 4 && (<FourthStep/>)}
                  {formStep === 5 && (<Summary/>)}
                  {formStep === 6 && (<ThankYou/>)}
                  <div className='steps_buttons'>
                      {formStep > 1 &&
                      (<button className='give_away_button' onClick={goToPreviousStep}> Wstecz </button>)}
                      {formStep < 5 &&
                      (<button className='give_away_button' onClick={completeFormStep}> Dalej </button>)}
                      {formStep === 5 &&
                      (<div>
                          <button type="submit"
                                  className='give_away_button'
                                  disabled={pristine || submitting}
                          >
                              Potwierdzam
                          </button>
                          <button type="button" className='give_away_button' disabled={pristine || submitting} onClick={reset}>
                              Wyczyść
                          </button>
                      </div>)}
                  </div>
              </form>
          </div>
      </div>
  );
};

FullForm = reduxForm({
  form: 'selectingFormValues',
})(FullForm);

const selector = formValueSelector('selectingFormValues');
FullForm = connect(state => {
  const bagsValue = selector(state, 'bags');
  const cityValue = selector(state, 'city');
  const receiverValue = selector(state, 'receiver');
  const whatToGiveValue = selector(state, 'whatToGive');
  const { street, city2, code, phone } = selector(state, 'street', 'city2', 'code', 'phone');
  const { date, hour, comments } = selector(state, 'date', 'hour', 'comments');
  return {
    cityValue,
    receiverValue,
    whatToGiveValue,
    bagsValue,
    fullDate:  `${date || ''} ${hour || ''} ${comments || ''}`,
    fullAddress: `${street || ''} ${city2 || ''} ${code || ''} ${phone || ''}`,
  };
})(FullForm);

export default FullForm;
