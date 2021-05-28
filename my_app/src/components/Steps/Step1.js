import React from "react";
import ReactDOM from "react-dom";
import useForm from "react-hook-form";

const Step = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        alert(JSON.stringify(data));
    };

    const rainbow = "red orange yellow green blue indigo violet".split(' ');

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>

                <fieldset style={{float: 'left'}}>
                    <legend>With the same name</legend>
                    {
                        rainbow.map(
                            (c,i) => <label key={c}><input type="checkbox" value={c} name="sameName" ref={register} />{c}</label>
                        )
                    }
                </fieldset>
                <fieldset style={{float: 'right'}}>
                    <legend>Using a fake index</legend>
                    {
                        rainbow.map(
                            (c,i) => <label key={c}><input type="checkbox" value={c} name={"withIndex."+i*2} ref={register} />{c}</label>
                        )
                    }
                </fieldset>
                <input type="submit" />
            </form>
        </div>
    );
}