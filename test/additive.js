'use strict';

const {adapters: {nodeunit: λ}} = require('fantasy-check');
const {identity} = require('fantasy-combinators');

const f = require('fantasy-land/laws/functor');
const m = require('fantasy-land/laws/monoid');
const s = require('fantasy-land/laws/semigroup');
const sʹ = require('fantasy-land/laws/setoid');

const {Additive} = require('../fantasy-monoids');

exports.functor = {

    'identity': λ.law(f.identity)(Additive),
    'composition': λ.law(f.composition)(Additive)
};


exports.monoid = {

    'rightIdentity': λ.law(m.rightIdentity)(Additive),
    'leftIdentity': λ.law(m.leftIdentity)(Additive)
};


exports.semigroup = {

    'associativity': λ.law(s.associativity)(Additive)
};


exports.setoid = {

    'reflexivity': λ.law(sʹ.reflexivity)(Additive),
    'symmetry': λ.law(sʹ.symmetry)(Additive),
    'transitivity': λ.law(sʹ.transitivity)(Additive)
};