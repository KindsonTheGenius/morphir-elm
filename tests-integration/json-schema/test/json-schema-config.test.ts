/*
This file contains test cases for the inferBackendConfig() 
function defined in  the config-processing.ts file @see 
*/

import type {JsonBackendOptions} from '../../../cli2/config-processing'
import configProcessing from '../../../cli2/config-processing'

describe('Test for Json Schema Config Processing',  () => {

    test('Test Case #1', async ()=>{
        const inputOptions: any = {
            input: "morphir-ir.json",
            output: "./dist",
            targetVersion: "2020-12",
            filename: "",
            useConfig: false,
            limitToModules: "",
            groupSchemaBy: "package",
            target: "JsonSchema"
        }
        const expectedOutputOptions: JsonBackendOptions = {
            input: 'morphir-ir.json',
            output: './dist',
            target: 'JsonSchema',
            targetVersion: '2020-12',
            filename: '',
            limitToModules: "",
            groupSchemaBy: 'package',
            useConfig: false
        }
        expect(configProcessing.inferBackendConfig(inputOptions)).resolves.toEqual(expectedOutputOptions)
    })

    test('Test Case #2', async ()=>{
        const inputOptions: any = {
            input: "morphir-ir.json",
            output: "./dist",
            targetVersion: "2020-12",
            filename: "Foo",
            useConfig: false,
            limitToModules: "",
            groupSchemaBy: "package",
            target: "JsonSchema"
        }
        const expectedOutputOptions: JsonBackendOptions = {
            input: 'morphir-ir.json',
            output: './dist',
            target: 'JsonSchema',
            targetVersion: '2020-12',
            filename: 'Foo',
            limitToModules: "",
            groupSchemaBy: 'package',
            useConfig: false
        }
        expect(configProcessing.inferBackendConfig(inputOptions)).resolves.toEqual(expectedOutputOptions)
    })

    test('Test Case #3', async ()=>{
        const inputOptions: any = {
            input: "morphir-ir.json",
            output: "./dist",
            targetVersion: "2020-12",
            filename: "Bar",
            useConfig: false,
            limitToModules: "",
            groupSchemaBy: "module",
            target: "JsonSchema"
        }
        const expectedOutputOptions: JsonBackendOptions = {
            input: 'morphir-ir.json',
            output: './dist',
            target: 'JsonSchema',
            targetVersion: '2020-12',
            filename: 'Bar',
            limitToModules: "",
            groupSchemaBy: 'module',
            useConfig: false
        }
        expect(configProcessing.inferBackendConfig(inputOptions)).resolves.toEqual(expectedOutputOptions)
    })

    test('Test Case #4', async ()=>{
        const inputOptions: any = {
            input: "morphir-ir.json",
            output: "./output",
            targetVersion: "2020-12",
            filename: "",
            useConfig: false,
            limitToModules: "",
            groupSchemaBy: "package",
            target: "JsonSchema"
        }
        const expectedOutputOptions: JsonBackendOptions = {
            input: 'morphir-ir.json',
            output: './output',
            target: 'JsonSchema',
            targetVersion: '2020-12',
            filename: '',
            limitToModules: "",
            groupSchemaBy: 'package',
            useConfig: false
        }
        expect(configProcessing.inferBackendConfig(inputOptions)).resolves.toEqual(expectedOutputOptions)
    })

    test('Test Case #5', async ()=>{
        const inputOptions: any = {
            input: "morphir-ir.json",
            output: "./dist",
            targetVersion: "2020-12",
            filename: "",
            useConfig: false,
            limitToModules: "",
            groupSchemaBy: "package",
            target: "JsonSchema"
        }
        const expectedOutputOptions: JsonBackendOptions = {
            input: 'morphir-ir.json',
            output: './dist',
            target: 'JsonSchema',
            targetVersion: '2020-12',
            filename: '',
            limitToModules: "",
            groupSchemaBy: 'package',
            useConfig: false
        }
        expect(configProcessing.inferBackendConfig(inputOptions)).resolves.toEqual(expectedOutputOptions)
    })
    
    test('Test Case #6', async ()=>{
        const inputOptions: any = {
            input: "morphir-ir.json",
            output: "./dist",
            targetVersion: "2020-12",
            filename: "",
            useConfig: false,
            limitToModules: "",
            groupSchemaBy: "package",
            target: "JsonSchema"
        }
        const expectedOutputOptions: JsonBackendOptions = {
            input: 'morphir-ir.json',
            output: './dist',
            target: 'JsonSchema',
            targetVersion: '2020-12',
            filename: '',
            limitToModules: "",
            groupSchemaBy: 'package',
            useConfig: false
        }
        expect(configProcessing.inferBackendConfig(inputOptions)).resolves.toEqual(expectedOutputOptions)
    })
})


