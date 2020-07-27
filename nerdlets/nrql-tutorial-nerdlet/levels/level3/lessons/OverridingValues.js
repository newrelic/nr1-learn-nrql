import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function OverridingValues() {
  return (
    <div>
      <h2>Counting NULL values</h2>
      <p>
        Sometimes your data is not reported how you need it to be reported. It's
        just data. Sometimes an integer can be returned as a string, but you
        need it to be an integer to perform some maths on it. Maybe you get a
        NULL result, but really for you, NULL means 0. OK, we hear you and we've
        added some functionality to answer this need.
      </p>

      <p>
        NULL values on attributes can appear on both out-of-the-box and custom
        data. When you use aggregators such as <code>count()</code> and{' '}
        <code>average()</code>, NRQL automatically removes values that are NULL
        from the calculation and only performs the function on events without a
        null value. NRQL lets you account for unexpected NULL values in
        calculations by using the "<code>OR value</code>" clause - for example,
        if you wanted to make sure NULL values for your "cartValue" attribute
        are counted as 0, you would use "cartValue OR 0" in your query.
      </p>

      <p>
        In this example, running <code>count()</code> on ApdexPerfZone only
        counts the number of times ApdexPerfZone has a value. But if we add "
        <code>OR 'Null'</code>" to the argument in the function, we can count
        all transactions where ApdexPerfZone exists or when the value is null.
      </p>
      <SampleQuery
        nrql="SELECT count(apdexPerfZone) as 'Events With Values', count(apdexPerfZone **OR 'Null'**) as 'Events With and Without Values' from Transaction since 24 hours ago"
        span="12"
      />

      <h2>Coercion</h2>
      <p>
        NRQL does not automatically apply coercion, meaning a float that is
        stored as a string is treated as a string and cannot be used by
        functions like <code>sum()</code> or <code>average()</code>. To override
        this behavior, use <code>boolean()</code> or <code>numeric()</code> to
        convert the passed argument to a boolean or number value. In this
        example, an <code>average()</code> function on "httpResponseCode"
        provides no value since this attribute is a string. If we convert the
        attribute to a number using <code>numeric</code>(httpResponseCode), we
        can then use the <code>average()</code> function to return a value.
      </p>
      <SampleQuery
        nrql="SELECT average(**numeric(httpResponseCode)**) as 'Converted Attribute', average(httpResponseCode) as 'Non-converted Attribute'  from Transaction since 24 hours ago"
        span="12"
      />

      <p>
        Another common example is sending a string value for TRUE or FALSE. You
        might have meant it to be a BOOLEAN value but it has not been sent in
        the right way. When this happens, don't worry! You could change how the
        source sends the data to make it a proper boolean. However, you can just
        use the <code>boolean()</code> function. The example query below will
        return the same result but that is because we're using a value sent by
        the agent as a BOOLEAN. If your attribute was a string "TRUE", boolean
        would ensure your success.
      </p>
      <SampleQuery
        nrql="SELECT count(boolean(error)), count(error)  from Transaction since 24 hours ago"
        span="12"
      />
      <h2>Lesson Summary</h2>
      <p>
        Sometimes the devil is in the detail. Here we've really just given you
        the power to control your data and tell NRQL how you want it to act.
        NRQL operates in the manner we deem to be the most logical, but if that
        does not suit your scenario, you can always use the above examples to
        override.
      </p>
    </div>
  );
}
