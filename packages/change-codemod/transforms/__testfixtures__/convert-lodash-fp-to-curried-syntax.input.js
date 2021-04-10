fp.getOr('', 'raw.message')(err);
fp.get('raw.decline_code', err);
fp.get('raw.decline_code')(err);
fp.get('processorResponseCode', transaction);
fp.pick(['uuid', 'locale', 'email', 'ip_address', 'country_code'], user);
stripe.tokens.create({
    card: fp.defaults(
      {
        exp_month: 12,
        exp_year: new Date().getFullYear() + 3,
        cvc: '123',
        name: 'Payment Service Integration Test',
      },
      paymentDetails
    ),
  });
fp.omit(['type', 'stack'], errorProperties);
fp.omit(['type', 'stack'])(errorProperties);
fp.upperFirst(_.camelCase(type));
fp.isNaN(exchangeRate);
fp.intersection(userIdentifiers, safeListedUserIdentifiers);
fp.invoke('toUpperCase', c);
fp.cloneDeep(obj)
fp.noop
