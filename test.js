import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
    const alfy = alfyTest();
    const result = await alfy('404');

    t.deepEqual(result, [
      {
        "code": "404",
        "message": "Not Found",
        "description": "The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.",
        "link": "https://httpstatuses.com/404"
      }
    ]);
});