buster.assertions.add("isPrototype", {
    assert:function (proto, obj) {
        return proto.isPrototypeOf(obj);
    },
    assertMessage:"Expected ${0} to be prototype of ${1}",
    expectation:"toBePrototype"
});

function assertTypeError(callback) {
    assert.exception(callback, "TypeError");
}

/* TODO: WHY YOU NO WORK? */
/*buster.assertions.add("isTypeError", {
    assert:function (callback) {
        assert.exception(callback, "TypeError");
    },
    assertMessage:"Expected TypeError exception",
    expectation:"toBeTypeError"
});*/