import { fixture, fixtureCleanup, html } from "@open-wc/testing-helpers";
import "./Link";
import { Link } from "./Link";

describe("Link component", () => {
  afterEach(() => {
    fixtureCleanup();
  });

  //tag
  test("should create correct tag", async () => {
    expect.hasAssertions();
    const component: Link.ELEMENT = await fixture(`<md-link tag="span"></md-link>`);
    expect(component.tag).toMatch("span");
  });

  //tag div
  test("should create correct tag", async () => {
    expect.hasAssertions();
    const component: Link.ELEMENT = await fixture(`<md-link tag="div"></md-link>`);
    expect(component.tag).toMatch("div");
  });

  // href
  test("should provide link href", async () => {
    expect.hasAssertions();
    const component: Link.ELEMENT = await fixture(` <md-link href="#"></md-link> `);
    expect(component.href).not.toBeNull();
  });

  // color
  test("should set link color", async () => {
    expect.hasAssertions();
    const component: Link.ELEMENT = await fixture(` <md-link class="md-link--yellow"></md-link> `);
    expect(component.className).toContain("md-link--yellow");
  });

  test("should set link tab-index", async () => {
    expect.hasAssertions();
    const component: Link.ELEMENT = await fixture(` <md-link tab-index="1"></md-link> `);
    expect(component.getAttribute("tab-index")).toEqual("1");

    const linkShadow = component!.shadowRoot!.querySelector(".md-link");
    expect(linkShadow!.getAttribute("tabindex")).toContain("1");
  });

  test("should set link tab-index correctly when disabled", async () => {
    expect.hasAssertions();
    const component: Link.ELEMENT = await fixture<Link.ELEMENT>(` <md-link tab-index="1" disabled></md-link> `);
    expect(component.disabled).toBeTruthy();

    const linkShadow = component!.shadowRoot!.querySelector(".md-link");
    expect(linkShadow!.getAttribute("tabindex")).toContain("-1");
  });

  // disabled
  test("should check if link disabled", async () => {
    expect.hasAssertions();
    const component: Link.ELEMENT = await fixture(
      html`
        <md-link disabled></md-link>
      `
    );
    expect(component.disabled).toBeTruthy();
  });

  // inline
  test("should make link inline", async () => {
    const component: Link.ELEMENT = await fixture(`<md-link class="md-link--inline"></md-link>`);
    expect(component.className).toContain("md-link--inline");
  });
});
