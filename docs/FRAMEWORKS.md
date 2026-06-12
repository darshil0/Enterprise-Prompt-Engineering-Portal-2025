# Prompt Engineering Frameworks Guide

This guide provides an in-depth look at the 7 industry-standard frameworks supported by the Enterprise Prompt Engineering Portal.

## 1. COSTAR
**Best for**: Executive Reports, Creative Writing, and Professional Communication.

-   **C**ontext: Provide background information.
-   **O**bjective: Define the specific task.
-   **S**tyle: Specify the writing style or persona.
-   **T**one: Set the emotional resonance.
-   **A**udience: Identify who the output is for.
-   **R**esponse: Define format requirements.

## 2. RISEN
**Best for**: Technical Documentation, Test Strategies, and System Architecture.

-   **R**ole: Assign a specific persona (e.g., "Senior SDET").
-   **I**nstructions: Provide clear, step-by-step commands.
-   **S**teps: Define the specific workflow to follow.
-   **E**nd Goal: State the desired final state.
-   **N**arrowing: Define constraints and negative prompts.

## 3. RACEF
**Best for**: Iterative Refinement and High-Precision Outputs.

-   **R**ephrase: Clarify the intent of the initial query.
-   **A**ppend: Add missing context or details.
-   **C**ontextualize: Link to specific background information.
-   **E**xamples: Provide 1-shot or few-shot samples.
-   **F**ollow-Up: Ask the model to verify its own logic.

## 4. SPEAR
**Best for**: Interactive Sessions, Tutoring, and Collaborative Debugging.

-   **S**tart: State the topic clearly.
-   **P**rovide: Supply the necessary data.
-   **E**xplain: Request reasoning or step-by-step logic.
-   **A**sk: Prompt for feedback or clarification.
-   **R**epeat: Iterate until the result is perfect.

## 5. QUEST
**Best for**: Research, Analysis, and Structured Inquiry.

-   **Q**uestion: The core inquiry.
-   **U**nderstanding: Verification of the problem space.
-   **E**xpectation: Success criteria.
-   **S**cope: Boundaries of the search/analysis.
-   **T**ime: Temporal constraints or deadlines.

## 6. APE
**Best for**: API Testing, Compliance Checks, and Brief Instructions.

-   **A**ction: What needs to be done.
-   **P**urpose: Why it needs to be done.
-   **E**xpectation: How the result should look.

## 7. RODES
**Best for**: Automation Infrastructure and Complex System Design.

-   **R**ole: The professional persona.
-   **O**bjective: The high-level goal.
-   **D**etails: Deep technical constraints.
-   **E**xamples: Reference architectures or patterns.
-   **S**ense Check: Validation of the proposed solution.

---

## Which one should I use?

| Scenario | Recommended Framework |
| :--- | :--- |
| Writing a formal email | **COSTAR** |
| Designing a test plan | **RISEN** |
| Debugging code | **SPEAR** |
| Conducting a market research | **QUEST** |
| Checking API compliance | **APE** |
| Refining a vague prompt | **RACEF** |
