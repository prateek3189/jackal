// Let's Start Javascript
introduction();
function introduction() {
    log(`This is Just a Introduction of Javascript.
        <p> Here I am just using a normal document method of getElementById and calling a function by using onclick method of an anchor link.</p>
        <p>Other methods are
            <br>
            -> getElementsByName
            <br>
            -> getElementsByClassName
            <br>
            -> getElementsByTagName
        </p>`);
}

// Statements
function statements() {
    log(`var a = b + 2;`);
}

// Expressions
function expressions() {
    log(`var a = b * 2;
        <ul>
            <li>Here is (2) is an expression</li>
            <li>Here is (b) is an expression</li>
            <li>Here is (b * 2) is an expression</li>
            <li>and var a = (b * 2) is also an expression itself</li>
        </ul>
        <br>
        Or it can be like
        <br>
        a = b * 2 + someFunction(C * 3);
        <br><br>
        -> It tells about Operator Precedence
        <br>
        -> It tells about Arithmatic Operations
        `);
}

// Default Message
function showDefaultIndexMessage() {
    log(`Now Go To Your <i>index.js</i> file. Use your browser console, if required.`)
}

// FAQs
function showFAQ() {
    log(`
        <dl>
            <dt>Q. Can JS run command line?</dd>
            <dd>=> No, But you need some JS environment like node to run it command line.</dt>

            <dt><dl></dl></dt>
            <dt>Q. Is it okay, if we missed a semicolon (;) ?</dd>
            <dd>=> Yes, Javascript can forgive some of your laziness, But best practice is to use it.</dt>

            <dt><dl></dl></dt>
            <dt>Q. Is there any difference between '' and ""?</dd>
            <dd>=> No, In Javascript there is no difference between '' and "", the only thing is you need to use same quotation at both the side. To maintain the code standareds pick anyone for your whole project.</dt>
        </dl>
        `);
}

function log(data) {
    let codePane = document.getElementById('codePane');
    codePane.innerHTML = data;
}
